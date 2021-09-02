import { Modify } from "@utils/typeHelpers";
import { GetUsersResponse } from "@generated/types";
import { Reference } from "@apollo/client";

type GetUsersReference = Modify<GetUsersResponse, { items: Reference[] }>;

export default GetUsersReference;
