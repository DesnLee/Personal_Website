import { useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import style from './Card3D.module.scss';

type Props = {
  children: ReactNode;
};

const transformElement = (e: HTMLDivElement, x: number, y: number): void => {
  const multiple = 50;
  const box = e.getBoundingClientRect();
  const calcX = -(y - box.y - box.height / 2) / multiple;
  const calcY = (x - box.x - box.width / 2) / multiple;

  e.style.transform =
    'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)';
};

const Card3D: FC<Props> = (props: Props) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseOverContainer = document.getElementsByTagName('body')[0];
    const event = (e: MouseEvent) => {
      window.requestAnimationFrame(() => {
        transformElement(el.current!, e.clientX, e.clientY);
      });
    };

    if (el.current) mouseOverContainer.addEventListener('mousemove', event);
  }, []);

  return (
    <div className={style.cardOutside}>
      <div className={style.cardInside} ref={el}>
        <div className={style.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Card3D;
