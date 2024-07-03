
const SectionTitle = ({subtitle, title}) => {
    return (
        <div>
            <p className="text-[##020043] border border-[#343268] rounded-3xl px-3 py-1 text-base max-w-fit">{subtitle}</p>
            <h3 className="text-[#020043] font-semibold text-4xl mt-4 w-3/4 max-w-[470px]">{title}</h3>
        </div>
    );
};

export default SectionTitle;