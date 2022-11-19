import './globals.css';
import NavBar from './NavBar';
import blogPostsJSON from '../data/dev-blog.json';

import { BlogPostModel } from '../models/BlogModel';
import { DiaryEntryModel } from '../models/DiaryModel';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}