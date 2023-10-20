import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
    HeartFilledIcon,
    BorderSplitIcon,
    LaptopIcon,
    GearIcon
  } from "@radix-ui/react-icons"

import {
  Pencil2Icon as DraftIcon,
  CheckCircledIcon as PublishedIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "published",
    label: "Published",
    icon: PublishedIcon,
  },
  {
    value: "draft",
    label: "Draft",
    icon: DraftIcon,
  },
];

export const categories = [
  {
    value: "4db30a13-2797-4c7d-a0ce-e0c127287a39",
    label: "Science",
    icon: GearIcon,
  },
  {
    value: "c13ae4a7-476c-4608-9b7a-9ec9488c42e4",
    label: "Health",
    icon: HeartFilledIcon,
  },
  {
    value: "7b8781b0-b4fa-40e4-ac23-5310640eecd7",
    label: "Marketing",
    icon: BorderSplitIcon,
  },
  {
    value: "962f860d-ab0d-4650-ae93-8171c8b47169",
    label: "Technology",
    icon: LaptopIcon,
  },
];

  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const status = [
    {
      value: "backlog",
      label: "Backlog",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "todo",
      label: "Todo",
      icon: CircleIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: StopwatchIcon,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]
  