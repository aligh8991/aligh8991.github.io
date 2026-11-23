import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon, IconName } from "./Icon";

interface Props {
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName;
  href?: string;
  to?: string;
  children: ReactNode;
}

/** Brand button. Renders a router link or a native anchor as needed. */
export class Button extends Component<Props> {
  render() {
    const { variant = "primary", icon, href, to, children } = this.props;
    const cls = `btn btn--${variant}`;
    const content = (<>{icon && <Icon name={icon} />}<span>{children}</span></>);
    if (to) return <Link className={cls} to={to}>{content}</Link>;
    return <a className={cls} href={href}>{content}</a>;
  }
}
