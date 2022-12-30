import { GetServerSideProps } from "next";
import { Router } from "next/router";

type Props = {
  locale: string;
};

export default function Locale({ locale }: Props) {
  return <p>{locale}</p>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = ctx?.params?.Locale || "";

  

  return {
    props: {
      locale,
    },
  };
};
