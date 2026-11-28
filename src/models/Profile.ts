import type { IconName } from "../components/Icon";

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  soundcloud: string;
}

/** A service line offered by Alto Studio. */
export interface Service {
  title: string;
  icon: IconName;
  summary: string;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  foundations: string[];
  certified?: string;
}

export interface Credential {
  name: string;
  issuer: string;
}

export interface Education {
  name: string;
  school: string;
  period: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  roles: string[];
  intro: string;
  summary: string[];
  contact: ContactInfo;
  services: Service[];
  skills: SkillGroup[];
  credentials: Credential[];
  education: Education;
  languages: string[];
  interests: string[];
}

/** One position in the experience timeline. */
export class Experience {
  constructor(
    public readonly role: string,
    public readonly organisation: string,
    public readonly detail: string,
    public readonly period: string,
    public readonly highlights: string[],
    public readonly current = false,
  ) {}
}

/** Domain model for the person shown on the site. */
export class Profile {
  constructor(private readonly data: ProfileData) {}

  get name() { return this.data.name; }
  get headline() { return this.data.headline; }
  get roles() { return this.data.roles; }
  get intro() { return this.data.intro; }
  get summary() { return this.data.summary; }
  get contact() { return this.data.contact; }
  get services() { return this.data.services; }
  get skills() { return this.data.skills; }
  get credentials() { return this.data.credentials; }
  get education() { return this.data.education; }
  get languages() { return this.data.languages; }
  get interests() { return this.data.interests; }

  get initials(): string {
    return this.data.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  }
  get mailHref(): string { return `mailto:${this.data.contact.email}`; }
  get telHref(): string { return `tel:${this.data.contact.phone.replace(/\s/g, "")}`; }
}
