export type ProjectStatus = "Completed" | "In development" | "Planned";

/** Domain model for a studio project that is not a music release. */
export class Project {
  constructor(
    public readonly title: string,
    public readonly category: string,
    public readonly status: ProjectStatus,
    public readonly summary: string,
  ) {}

  get isLive(): boolean {
    return this.status === "Completed";
  }
}
