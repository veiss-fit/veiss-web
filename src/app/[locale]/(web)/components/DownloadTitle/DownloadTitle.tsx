type Props = {
  title: string;
  subtitle: string;
};
function DownloadTitle({ title, subtitle }: Props) {
  return (
    <>
      <h2 className="text-center md:text-[64px] md:leading-[64px] text-[42px] leading-[42px] text-[#323232] font-[900] uppercase">
        {title}
      </h2>
      <p className="md:pt-[40px] pt-[30px] md:pb-[34px] pb-[24px] text-[16px] leading-[24px] text-[#333333] text-center">
        {subtitle}
      </p>
    </>
  );
}

export default DownloadTitle;
