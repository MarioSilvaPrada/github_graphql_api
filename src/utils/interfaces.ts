export interface IRepoData {
  edges: Array<{
    node: {
      name: string;
      stargazers: {
        totalCount: number;
      };
      forks: {
        totalCount: number;
      };
    };
  }>;
}
