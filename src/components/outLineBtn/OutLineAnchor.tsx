import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import style from './OutLineAnchor.module.scss';

type Props = {
  href: string;
  text?: string;
  color?: string;
  normalColor?: string;
};

const OutLineAnchor: FC<Props> = (props: Props) => {
  const el = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const { color, normalColor } = props;
    const bgColor = color + '12';

    if (color) {
      el.current?.style.setProperty('--outLineBtn-highlight-color', color);
      el.current?.style.setProperty('--outLineBtn-background-color', bgColor);
    }

    if (normalColor) {
      el.current?.style.setProperty('--outLineBtn-normal-color', normalColor);
    }
  }, [props.color, props.normalColor]);

  return (
    <a ref={el} className={`${style.hoverOutlineBtn} button`} href={props.href}>
      <span>{props.text || 'Link'}</span>
    </a>
  );
};

export default OutLineAnchor;
