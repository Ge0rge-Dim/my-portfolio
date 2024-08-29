const SectionHeader = ({ title, number }) => {
  return (
    <>
      <div className="flex flex-row justify-between pb-2">
        <h3 className="text-lg max-sm:text-base font-light">{title}</h3>
        <p className="text-lg max-sm:text-base font-light">{number}</p>
      </div>
      <div className="border bg-primary-light opacity-80"></div>
    </>
  );
};

export default SectionHeader;
