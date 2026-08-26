import { GALLERY, type GalleryItem } from "@/data/gallery";
import { MENU_BOARDS } from "@/data/menu";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Kind = "menu" | "gallery";
type State = { kind: Kind; index: number } | null;

type Ctx = {
  openMenu: (index: number) => void;
  openGallery: (index: number) => void;
};

const LightboxContext = createContext<Ctx | null>(null);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error("useLightbox must be used within LightboxProvider");
  return context;
}

const COLLECTIONS = {
  menu: MENU_BOARDS,
  gallery: GALLERY,
} as const;

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(null);
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);

  const openMenu = useCallback((index: number) => setState({ kind: "menu", index }), []);
  const openGallery = useCallback((index: number) => setState({ kind: "gallery", index }), []);
  const close = useCallback(() => setState(null), []);
  const value = useMemo(() => ({ openMenu, openGallery }), [openMenu, openGallery]);

  const collection = state ? COLLECTIONS[state.kind] : null;
  const current = state && collection ? collection[state.index] : null;
  const open = Boolean(state && current);

  const step = useCallback((direction: -1 | 1) => {
    setState((currentState) => {
      if (!currentState) return currentState;
      const items = COLLECTIONS[currentState.kind];
      return { kind: currentState.kind, index: (currentState.index + direction + items.length) % items.length };
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
        <Dialog.Portal>
          {open && current && collection && state ? (
            <>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-[80] bg-ink"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                />
              </Dialog.Overlay>
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-0 z-[81] flex flex-col outline-none"
                onCloseAutoFocus={(event) => event.preventDefault()}
                onPointerDown={(event) => {
                  touchX.current = event.clientX;
                }}
                onPointerUp={(event) => {
                  if (touchX.current == null) return;
                  const delta = event.clientX - touchX.current;
                  if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
                  touchX.current = null;
                }}
              >
                <div className="mx-auto flex w-[min(1200px,calc(100%-2rem))] items-center justify-between pt-6">
                  <Dialog.Title className="text-[0.68rem] tracking-[0.2em] text-bronze uppercase">
                    {state.kind === "menu" ? "Menu" : (current as GalleryItem).caption}
                  </Dialog.Title>
                  <Dialog.Close className="grid h-11 w-11 place-items-center text-cream hover:text-bronze" aria-label="Close">
                    <X size={22} strokeWidth={1.4} />
                  </Dialog.Close>
                </div>
                <div className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-6 md:px-20">
                  <button
                    type="button"
                    className="absolute left-3 grid h-11 w-11 place-items-center border border-cream/25 text-cream hover:border-bronze hover:text-bronze md:left-8"
                    aria-label="Previous image"
                    onClick={() => step(-1)}
                  >
                    <ChevronLeft size={20} strokeWidth={1.4} />
                  </button>
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="max-h-[78vh] w-auto max-w-[min(88vw,56rem)] object-contain"
                  />
                  <button
                    type="button"
                    className="absolute right-3 grid h-11 w-11 place-items-center border border-cream/25 text-cream hover:border-bronze hover:text-bronze md:right-8"
                    aria-label="Next image"
                    onClick={() => step(1)}
                  >
                    <ChevronRight size={20} strokeWidth={1.4} />
                  </button>
                </div>
                <p className="mx-auto w-[min(1200px,calc(100%-2rem))] pb-6 text-[0.68rem] tracking-[0.16em] text-cream/50 uppercase">
                  {state.index + 1} / {collection.length}
                </p>
              </Dialog.Content>
            </>
          ) : null}
        </Dialog.Portal>
      </Dialog.Root>
    </LightboxContext.Provider>
  );
}
