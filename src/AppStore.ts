import { observable } from "mobx";

export const VALID_APPS: string[] = ["Notion", "Slack", "Figma", "Google Docs"];
export const APP_NAME_TO_ICONS: Record<string, { icon_url: string }> = {
  Github: {
    icon_url:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  Figma: {
    icon_url:
      "https://cdn.shopify.com/s/files/1/0284/7024/7555/products/figma2x_1048x.png?v=1591893627"
  },
  "Google Docs": {
    icon_url:
      "https://storage.googleapis.com/nooks-image-assets/template/GoogleDoc.svg"
  },
  "Stack Overflow": {
    icon_url:
      "https://storage.googleapis.com/nooks-image-assets/stack-overflow.png"
  }
};

export type AppHistoryEntry = {
  appName: string;
  title: string;
  URL: string;
  timestamp: number;
};

export class AppStore {
  @observable myAppEntries: AppHistoryEntry[] = [];
}
