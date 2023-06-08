import Head from "next/head";

export default function StructuredData({ data, nameKey }: { data: unknown[] | unknown; nameKey: string }) {
  return (
    <Head>
      {Array.isArray(data) ? (
        data.map((item, i) => (
          <script key={nameKey + i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
        ))
      ) : (
        <script key={nameKey} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      )}
    </Head>
  );
}
