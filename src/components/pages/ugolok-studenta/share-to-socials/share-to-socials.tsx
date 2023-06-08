// https://t.me/share/url?url=&text=&utm_source=share2 tg
// https://vk.com/share.php?url=&title=&utm_source=share2 vk
// https://api.whatsapp.com/send?text=&utm_source=share2 whatsapp

import React from "react";
import urls from "@/utils/urls";
import { ShareIcon } from "@/icons/share-icon";
import { TelegramIcon } from "@/icons/telegram-icon";
import { VkontakteIcon } from "@/icons/vkontakte-icon";
import { WhatsAppIcon } from "@/icons/whats-app-icon";

type Props = {
  title: string;
  className: string;
  url: string;
};

export const ShareToSocials = ({ className, title, url }: Props) => {
  return (
    <div className={className}>
      <ShareIcon width={24} height={24} title="Поделиться статьей в социальных сетях" />
      <p>Поделиться: </p>

      <VkontakteIcon
        width={24}
        height={24}
        title="Поделиться статьей во Вконтакте"
        href={`https://vk.com/share.php?url=${encodeURIComponent(urls.host + url)}&title=${encodeURIComponent(
          title + " | Безпересдач - уголок студента "
        )}&utm_source=share2`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      />

      <TelegramIcon
        width={24}
        height={24}
        title="Поделиться статьей в Telegram"
        href={`https://t.me/share/url?url=${encodeURIComponent(urls.host + url)}&text=${encodeURIComponent(
          title + " | Безпересдач - уголок студента "
        )}&utm_source=share2`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      />

      <WhatsAppIcon
        width={24}
        height={24}
        title="Поделиться статьей в Whatsapp"
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          title + " | Безпересдач - уголок студента " + "  " + urls.host + url
        )}&utm_source=share2`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      />
    </div>
  );
};
