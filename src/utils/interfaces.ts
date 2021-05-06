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
      url: string;
    };
  }>;
}

export interface IUser {
  login: string;
  avatarUrl: string;
  name: string;
  url: string;
}
