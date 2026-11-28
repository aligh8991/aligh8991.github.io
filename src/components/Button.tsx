import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon, IconName } from "./Icon";

interface Props {
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName;
  href?: string;
  to?: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

/** Brand button: pill shape, 44px minimum hit area. Renders a router link, an anchor or a button. */
export class Button extends Component<Props> {
  render() {
    const { variant = "primary", icon, href, to, external, download, onClick, children } = this.props;
    const cls = `btn btn--${variant}`;
    const content = (<>{icon && <Icon name={icon} />}<span>{children}</span></>);
    if (to) return <Link className={cls} to={to}>{content}</Link>;
    if (href) {
      const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
      return <a className={cls} href={href} download={download ? "" : undefined} {...ext}>{content}</a>;
    }
    return <button className={cls} type="button" onClick={onClick}>{content}</button>;
  }
}
