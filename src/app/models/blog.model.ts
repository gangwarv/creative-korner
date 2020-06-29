import { User } from './user.model';
export interface Blog {
  id: String;
  title: String;
  category: String;
  creator?: User;
  content: any;
  metaTitle?: String;
  metaDescription?: String;
  comments?: BlogComment[];
}

export interface BlogContent {
  time: Number;
  block: BlogContentBlock[];
  version: String;
}
export interface BlogContentBlock {
  type: String;
  data: {
    text?: String;
    level?: String;
  };
}
export interface BlogComment {
  user: User;
  text: String;
  createdAt: Date;
}

/**
 data: OutputData = {
    time: 1592584304450,
    blocks: [
      { type: 'header', data: { text: 'Usage', level: 2 } },
 */
