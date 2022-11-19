import Link from 'next/link';
import ReactImageFallback from 'react-image-fallback';

import { isBlogPost } from '../../models/BlogModel';
import { DiaryEntryModel, isDiaryEntry } from '../../models/DiaryModel';
import { JournalEntryModel } from '../../models/JournalModel';
import { formatDate } from '../../utils/formatDate';
import { truncateText } from '../../utils/formatPreviewText';
import { ReactHTMLParser } from '../../hacks/react-html-parser';

type JournalEntryPreviewProps = {
  journalEntry: JournalEntryModel;
};

export default function JournalEntryPreview({
  journalEntry,
}: JournalEntryPreviewProps) {
  const thumbnailPath = `/imgs/webp/${journalEntry.thumbnail}_1280px.webp`;
  const thumbnailPathFallback = `/imgs/jpeg/${journalEntry.thumbnail}_1280px.jpeg`;
  const title = journalEntry.title;
  const previewText = truncateText(journalEntry.sections[0].text, 195, '...');

  const date = (diaryEntry: DiaryEntryModel) => formatDate(diaryEntry.date);
  const link = () => {
    if (isBlogPost(journalEntry)) return `/blog/${journalEntry.id.toString()}`;
    if (isDiaryEntry(journalEntry)) return `/diary/${journalEntry.date}`;
    throw new Error(`Unknown journal entry type: ${journalEntry}`);
  };

  return (
    <div className="border-2 rounded-2xl p-5 flex flex-col max-w-xl mx-auto md:flex-row md:max-w-none gap-x-4">
      <div>
        {/* <ReactImageFallback
          src={thumbnailPath}
          fallbackImage={thumbnailPathFallback}
          alt="Thumbnail"
          className="pb-1 rounded-t-md h-full aspect-[4/3] justify-self-center object-cover"
        /> */}
      </div>

      <div>
        <header className="py-2">
          <h1 className="text-2xl font-extrabold pb-0.5">{title}</h1>
          {isDiaryEntry(journalEntry) && (
            <small className="text-neutral-600 text-base font-bold ">
              {date(journalEntry)}
            </small>
          )}
        </header>
        <p className="text-lg text-black">{ReactHTMLParser(previewText)}</p>
        <div className="flex justify-center pt-1 ">
          <Link
            className="rounded-lg bg-red-600 bg-opacity-90 px-4 mt-3 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-700 hover:bg-opacity-90"
            href={link()}
          >
            weiterlesen
          </Link>
        </div>
      </div>
    </div>
  );
}