import { JournalEntryModel } from '../../models/JournalModel';
import JournalPagePreviewItem from './JournalPagePreviewItem';

type JournalPagePreviewProps = {
  journalEntrys: JournalEntryModel[];
  previewSize: number;
  previewTitle: string;
};

export default function JournalPagePreview({
  journalEntrys,
  previewSize,
  previewTitle,
}: JournalPagePreviewProps) {
  const previewJournalEntrys = journalEntrys.slice(0, previewSize);
  return (
    <div className="pb-12 flex flex-col items-center border-b-2 last:border-b-0 border-black">
      <h1 className="text-5xl font-bold mt-14 mb-12">{previewTitle}</h1>

      <div className="flex flex-col sm:grid-cols-3 sm:grid gap-12">
        {previewJournalEntrys.map((journalEntry) => (
          <div key={journalEntry.upload_date}>
            <JournalPagePreviewItem journalEntry={journalEntry} />
          </div>
        ))}
      </div>
    </div>
  );
}
