const SectionHeading = ({ title, textDark }) => {
  return (
    <h2
      className={`text-4xl text-center my-6 ${
        textDark ? "text-secondary" : "text-white"
      }`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
