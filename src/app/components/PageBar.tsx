type Props = {
  page: number;
};

export default function PageBar({ page }: Props) {
  return (
    <div>
      <button>Previous</button>
      <h5>{page}</h5>
      <button>Next</button>
    </div>
  );
}
