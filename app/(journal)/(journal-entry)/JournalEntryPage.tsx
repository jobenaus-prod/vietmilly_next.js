import ReactImageFallback from 'react-image-fallback';
import { DiaryEntryModel, isDiaryEntry } from '../../../models/DiaryModel';
import { JournalEntryModel } from '../../../models/JournalModel';
import { formatDate } from '../../../utils/formatDate';
import JournalEntrySection from './JournalEntrySection';

type JournalEntryLayoutProps = {
  journalEntry: JournalEntryModel;
};

export default function JournalEntryLayout({
  journalEntry,
}: JournalEntryLayoutProps) {
  const title = journalEntry.title;
  const thumbnailPath = `/imgs/webp/${journalEntry.thumbnail}_1280px.webp`;
  const thumbnailPathFallback = `/imgs/jpeg/${journalEntry.thumbnail}_1280px.jpeg`;
  const date = (diaryEntry: DiaryEntryModel) => formatDate(diaryEntry.date);
  return (
    <div className="px-5 max-w-6xl  pb-1">
      <div className="max-w-4xl mx-auto">
        <header className="py-5">
          <h1 className="text-5xl font-bold pb-3">{title}</h1>
          {isDiaryEntry(journalEntry) && (
            <small className="text-lg font-bold text-neutral-500">
              {date(journalEntry)}
            </small>
          )}
        </header>
        {/* <ReactImageFallback
          src={thumbnailPath}
          fallbackImage={thumbnailPathFallback}
          alt={thumbnailPath}
          className="max-h-[36rem] w-full object-cover"
        /> */}
        <div>
          {journalEntry.sections.map((journalEntrySection) => (
            <JournalEntrySection
              key={journalEntrySection.id}
              journalEntrySection={journalEntrySection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}