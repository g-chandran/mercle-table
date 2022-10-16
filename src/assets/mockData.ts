enum Status {
  YetToBeClaimed = "Yet to be claimed",
  Pending = "Pending",
  Claimed = "Claimed",
}

export interface Mockdata {
  id: string;
  nftName: string;
  nftAvatar: string;
  description: string;
  attributes: Array<"Silver" | "Medal" | "Bronze">;
  status: Status;
  dateClaimed: Date;
}

export const MOCKDATA: Mockdata[] = [
  {
    id: "realsuzenshrestha@gmail.com",
    nftName: "Orange Crab-face",
    nftAvatar: "",
    description:
      "Sickle-hedman is one of 1,000 Hedz. Hand drawn by Matt Furie on planet Earth in 2022.",
    attributes: ["Silver", "Medal", "Bronze"],
    status: Status.YetToBeClaimed,
    dateClaimed: new Date(),
  },
];
