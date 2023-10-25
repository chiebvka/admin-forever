import { DashBoardAttributes, DashBoardPageAttributes } from "@/types";
import {
  BookMarkedIcon,
  LayoutGridIcon as DashBoardIcon,
  HeartIcon as LikeIcon,
  LogOut,
  FilePlus2Icon as NewIcon,
  FileTextIcon as PostIcon,
  SettingsIcon,
  UserCircle,
  Home,
  Library,
  ListFilter,
  Users,
  Banknote,
  Mails,
  UserPlus
} from "lucide-react";

const post: DashBoardAttributes = {
  title: "Home",
  slug: "/",
  icon: Home,
};

const bookmarks: DashBoardAttributes = {
  title: "Blogs",
  slug: "/blogs",
  icon: Library,
};

const settings: DashBoardAttributes = {
  title: "Categories",
  slug: "/category",
  icon: ListFilter,
};
const users: DashBoardAttributes = {
  title: "Administrators",
  slug: "/users",
  icon: Users,
};
const tags: DashBoardAttributes = {
  title: "Blog Tags",
  slug: "/blog-tag",
  icon: SettingsIcon,
};
const kickstarter: DashBoardAttributes = {
  title: "Kickstarter",
  slug: "/kickstarter",
  icon: Banknote,
};
const message: DashBoardAttributes = {
  title: "Messages",
  slug: "/messages",
  icon: Mails,
};
const subscriber: DashBoardAttributes = {
  title: "Subscribers",
  slug: "/subscribers",
  icon: UserPlus,
};
// Because of weird key warnings for shadcn ui MenuItem used seperate DashboardMenu constants
export const dashBoardMenus = {
  post,
  bookmarks,
  settings,
  users,
  tags,
  kickstarter,
  message,
  subscriber
};
// Because of weird key warnings for shadcn ui MenuItem used seperate DashboardMenu constants
export const dashBoardMenusLoop: DashBoardAttributes[] = [
  {
    title: "Home",
    slug: "/",
    icon: Home,
  },
  {
    title: "Blogs",
    slug: "/blogs",
    icon: Library,
  },
  // {
  //   title: "Categories",
  //   slug: "/category",
  //   icon: ListFilter,
  // },
  {
    title: "Administrators",
    slug: "/users",
    icon: Users,
  },
  // {
  //   title: "Blog Tags",
  //   slug: "/blog-tag",
  //   icon: SettingsIcon,
  // },
  {
    title: "Kickstarter",
    slug: "/kickstarter",
    icon: Banknote,
  },
  {
    title: "Messages",
    slug: "/messages",
    icon: Mails,
  },
  {
    title: "Subscribers",
    slug: "/subscribers",
    icon: UserPlus,
  },
];

export const dashBoardPages: DashBoardPageAttributes[] = [
  {
    title: "About",
    slug: "/pages/about",
    initial: "AB",
  },
  {
    title: "Terms",
    slug: "/pages/terms",
    initial: "TS",
  },
  {
    title: "Policy",
    slug: "/pages/policy",
    initial: "PY",
  },
  {
    title: "Contact",
    slug: "/pages/contact",
    initial: "CT",
  },
];

export const dashBoardLogout: DashBoardAttributes = {
  title: "Sign Out",
  slug: "/logout",
  icon: LogOut,
};
export const dashBoardProfile: DashBoardAttributes = {
  title: "Profile",
  slug: "/settings",
  icon: UserCircle,
};
