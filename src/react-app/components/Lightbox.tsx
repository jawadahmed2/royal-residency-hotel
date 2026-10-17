import { useCallback, useEffect, useRef } from "react";
import { PHOTOS, photoSrc } from "../data";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

type Props = {
	ids: string[];
	index: number;
	title?: string;
	onIndex: (i: number) => void;
	onClose: () => void;
};

export default function Lightbox({ ids, index, title, onIndex, onClose }: Props) {
	const closeRef = useRef<HTMLButtonElement>(null);
	const touchX = useRef<number | null>(null);
	const count = ids.length;

	const go = useCallback((delta: number) => onIndex((index + delta + count) % count), [index, count, onIndex]);

	useEffect(() => {
		const prevFocus = document.activeElement as HTMLElement | null;
		closeRef.current?.focus();
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
			prevFocus?.focus();
		};
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowRight") go(1);
			else if (e.key === "ArrowLeft") go(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go, onClose]);

	const id = ids[index];

	return (
		<div className="lightbox" role="dialog" aria-modal="true" aria-label={title ?? "Photo viewer"} onClick={onClose}>
			<div className="lightbox__top" onClick={(e) => e.stopPropagation()}>
				<span className="lightbox__title">
					{title && <strong>{title}</strong>}
					<span>
						{index + 1} / {count}
					</span>
				</span>
				<button ref={closeRef} className="lightbox__close" aria-label="Close" onClick={onClose}>
					<CloseIcon />
				</button>
			</div>

			<figure
				className="lightbox__stage"
				onClick={(e) => e.stopPropagation()}
				onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
				onTouchEnd={(e) => {
					if (touchX.current === null) return;
					const dx = e.changedTouches[0].clientX - touchX.current;
					if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
					touchX.current = null;
				}}
			>
				<img key={id} src={photoSrc(id, "lg")} alt={PHOTOS[id]?.alt ?? ""} className="lightbox__img" />
				<figcaption>{PHOTOS[id]?.alt}</figcaption>
			</figure>

			{count > 1 && (
				<>
					<button
						className="lightbox__nav lightbox__nav--prev"
						aria-label="Previous photo"
						onClick={(e) => {
							e.stopPropagation();
							go(-1);
						}}
					>
						<ChevronLeftIcon size={28} />
					</button>
					<button
						className="lightbox__nav lightbox__nav--next"
						aria-label="Next photo"
						onClick={(e) => {
							e.stopPropagation();
							go(1);
						}}
					>
						<ChevronRightIcon size={28} />
					</button>
					<div className="lightbox__thumbs" onClick={(e) => e.stopPropagation()}>
						{ids.map((t, i) => (
							<button key={t} className={i === index ? "is-active" : ""} aria-label={`Photo ${i + 1}`} onClick={() => onIndex(i)}>
								<img src={photoSrc(t, "sm")} alt="" loading="lazy" />
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
