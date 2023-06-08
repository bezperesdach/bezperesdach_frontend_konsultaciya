import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { Agreement } from "@/components/pages/about-us/agreement/agreement";

const Information = () => {
  return (
    <>
      <SEO
        title="Пользовательское соглашение | Безпересдач"
        description="Команда “Безпересдач” заботится о конфиденциальности каждого клиента"
        url={"https://bezperesdach.ru/about_us/agreement"}
        image="https://bezperesdach.ru/assets/og_logo.png"
      />

      <div className="dynamic_container">
        <Agreement />
      </div>
    </>
  );
};

Information.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Information;
