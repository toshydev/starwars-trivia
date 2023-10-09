import { formatDateFromString } from "@/util/util";
import styled from "styled-components";

type DateSectionProps = {
  created: string;
  edited: string;
};

export default function DateSection({ created, edited }: DateSectionProps) {
  return (
    <StyledDateSection>
      <small>Created: {formatDateFromString(created)}</small>
      <small>Edited: {formatDateFromString(edited)}</small>
    </StyledDateSection>
  );
}

const StyledDateSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid gold;
  padding: 0.5rem;
  margin-top: 0.5rem;

  small {
    font-size: 0.8rem;
    color: gold;
  }
`;
