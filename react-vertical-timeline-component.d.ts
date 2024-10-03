declare module "react-vertical-timeline-component" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}
