import { formatDateFromString } from "@/util/util";

type DateSectionProps = {
  created: string;
  edited: string;
};

export default function DateSection({ created, edited }: DateSectionProps) {
  return (
    <section>
      <small>Created: {formatDateFromString(created)}</small>
      <small>Edited: {formatDateFromString(edited)}</small>
    </section>
  );
}
