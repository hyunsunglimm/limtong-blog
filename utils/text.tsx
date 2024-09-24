export const highlightedText = (text: string, query: string) => {
  if (query !== "" && text.toLowerCase().includes(query.toLowerCase())) {
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="text-my">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return text;
};
