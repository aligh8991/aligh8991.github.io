export interface ContactInfo {
  email: string;
  phone: string;
}

export interface Skill {
  title: string;
  icon: "code" | "music" | "language";
  level: string;
  summary: string;
  items: string[];
}

export interface Credential {
  name: string;
  issuer: string;
}

/** Domain model for the person shown on the site. */
export class Profile {
  constructor(
    public readonly name: string,
    public readonly headline: string,
    public readonly summary: string[],
    public readonly contact: ContactInfo,
    public readonly skills: Skill[],
    public readonly credentials: Credential[],
  ) {}

  get initials(): string {
    return this.name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("");
  }

  get mailHref(): string {
    return `mailto:${this.contact.email}`;
  }

  get telHref(): string {
    return `tel:${this.contact.phone.replace(/\s/g, "")}`;
  }
}
