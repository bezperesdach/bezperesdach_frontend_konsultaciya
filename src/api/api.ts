import { ProjectTypes } from "@/utils/popupOrder/utils";
import { isDevelopment } from "@/utils/utils";

const PUBLIC_TOKEN = isDevelopment ? process.env.NEXT_PUBLIC_STRAPI_LOCAL_TOKEN : process.env.NEXT_PUBLIC_STRAPI_PUBLIC_TOKEN;

const INCREASE_ARTICLE_VIEW_TOKEN = isDevelopment
  ? process.env.INCREASE_ARTICLE_VIEW_COUNT_TOKEN_STRAPI_LOCAL
  : process.env.INCREASE_ARTICLE_VIEW_COUNT_TOKEN_STRAPI_PUBLIC;

export const API_URL = isDevelopment ? "http://127.0.0.1:1337/api" : process.env.NEXT_PUBLIC_BACKEND_API_URL;

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === "rejected";

const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const waitFor = (amount: number) => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

export const createOrder = async (data: FormData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "post",
    body: data,
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
    },
  });

  return response;
};

export const becomeWorker = async (worker: IWorker, recaptchaToken: string) => {
  const response = await fetch(`${API_URL}/new-workers`, {
    method: "post",
    body: JSON.stringify({ data: { ...worker, recaptchaToken } }),
    headers: { "Content-Type": "application/json; charset=UTF-8", Authorization: `Bearer ${PUBLIC_TOKEN}` },
  });

  return response;
};

export const getPromoCode = async (promoCode: string, recaptchaToken: string) => {
  const response = await fetch(`${API_URL}/promo-codes/${promoCode}?recaptchaToken=${recaptchaToken}`, {
    headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
  });

  return response;
};

export const getReviews = async (props?: { projectType?: ProjectTypes; limit?: number }) => {
  try {
    const url = new URL(`${API_URL}/reviews/getRandomReviews`);
    if (props) {
      props.limit && url.searchParams.append("limit", props.limit.toString());
      props.projectType && url.searchParams.append("projectType", props.projectType);
    }

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
    });

    if (response.ok) {
      const data: RandomReviews = (await response.json()).data;

      return { errors: false, message: "", data };
    } else {
      return { errors: true, message: "not ok", data: null };
    }
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const getAverageRating = async () => {
  try {
    const response = await fetch(`${API_URL}/reviews/getAverageRating`, {
      headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
    });
    const data: ReviewsAverageRating = (await response.json()).data;

    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const ugolokStudentaFindArticle = async (query: string, paginationStart = 0, paginationLimit = 10) => {
  let counter = 0;
  const stringQuery = query.split(" ").reduce((prev, curr, i) => {
    let param = "";
    if (i === 0) {
      param += "?";
    } else {
      param += "&";
    }

    param += `filter[$or][${counter}][title][$containsi]=${encodeURI(curr)}`;
    counter++;
    param += `filter[$or][${counter}][shortDescription][$containsi]=${encodeURI(curr)}`;

    return (prev += param);
  }, "");

  try {
    const response = await fetch(
      `${API_URL}/articles/${stringQuery}$pagination[start]=${paginationStart}&pagination[limit]=${paginationLimit}`,
      {
        headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
      }
    );
    const data = await response.json();
    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const increaseArticleViewCount = async (url: string, recaptchaToken: string) => {
  try {
    const response = await fetch(`${API_URL}/article/${url}/add-view-to-counter`, {
      method: "POST",
      body: JSON.stringify({ data: { recaptchaToken } }),
      headers: { Authorization: `Bearer ${INCREASE_ARTICLE_VIEW_TOKEN}` },
    });

    if (response.ok) {
      return { success: true, message: "" };
    } else {
      return { success: false, message: "" };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

export const ugolokStudentaGetAllArticlesPreviews = async (paginationStart = 0, paginationLimit = 10, ip?: string) => {
  try {
    const response = await fetch(
      `${API_URL}/article/get-previews?pagination[start]=${paginationStart}&pagination[limit]=${paginationLimit}&sort[0]=createdAt%3Adesc&sort[1]=updatedAt%3Adesc&populate=*`,
      {
        headers: { Authorization: `Bearer ${PUBLIC_TOKEN}`, ...(ip && { "X-Forwarded-For": ip }) },
      }
    );

    const data = await response.json();
    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const ugolokStudentaGetArticle = async (articleUrl: string, ip?: string) => {
  try {
    const response = await fetch(`${API_URL}/article/${articleUrl}`, {
      headers: { Authorization: `Bearer ${PUBLIC_TOKEN}`, ...(ip && { "X-Forwarded-For": ip }) },
    });

    const data = await response.json();
    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const ugolokStudentaGetAllArticlesUrls = async () => {
  try {
    const response = await fetch(`${API_URL}/article/get-all-urls`, {
      headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
    });

    const data = await response.json();
    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const getOrderArticle = async (slug: string) => {
  try {
    const response = await fetch(`${API_URL}/project-type-article/${slug}`, {
      headers: { Authorization: `Bearer ${PUBLIC_TOKEN}` },
    });

    const data: OrderSeoArticle = (await response.json()).data;

    return { errors: false, message: "", data };
  } catch (error) {
    return { errors: true, message: error, data: null };
  }
};

export const authenticateUser = async (
  user: IUser,
  onRequest: () => void,
  onSuccess: () => void,
  onError: (err: unknown) => void,
  onClearError: () => void
) => {
  onRequest();

  try {
    const data = fetch(`${API_URL}/auth/local`, { method: "post", body: JSON.stringify({ ...user }) }).then((res) => res.json());

    const res = await Promise.allSettled([data, waitFor(300)]);

    const response = res.find(isFulfilled)?.value;
    const rejected = res.find(isRejected)?.reason;

    if (response) {
      return onSuccess();
    }

    if (rejected) {
      throw rejected;
    }
  } catch (err) {
    onError(err);
    setTimeout(() => onClearError(), 5000);
  }
};

interface IWorker {
  name: string;
  email: string;
}
