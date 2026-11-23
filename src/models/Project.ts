export type ProjectStatus = "Completed" | "In development" | "Planned";

/** Domain model for a portfolio entry. */
export class Project {
  constructor(
    public readonly title: string,
    public readonly category: string,
    public readonly status: ProjectStatus,
    public readonly summary: string,
    public readonly stack: string[],
    public readonly outcome: string,
  ) {}

  get isLive(): boolean {
    return this.status === "Completed";
  }
}
