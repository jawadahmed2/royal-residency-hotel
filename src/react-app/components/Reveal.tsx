import { useEffect, useRef, useState, type ElementType, type FormEventHandler, type ReactNode } from "react";

type RevealProps = {
	as?: ElementType;
	className?: string;
	delay?: number;
	children: ReactNode;
	id?: string;
	onSubmit?: FormEventHandler;
};

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, id, onSubmit }: RevealProps) {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(() => !("IntersectionObserver" in window));

	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					io.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			id={id}
			onSubmit={onSubmit}
			className={`reveal ${visible ? "is-visible" : ""} ${className}`}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</Tag>
	);
}
