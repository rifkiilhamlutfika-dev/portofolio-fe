import { format } from "date-fns";
import idLocale from "date-fns/locale/id";

const formatedDate = (date) => {
  return format(new Date(date), "dd MMMM yyyy", { locale: idLocale });
};

const formatedDateWithDay = (date) => {
  return format(new Date(date), "EEEE, dd MMMM yyyy", { locale: idLocale });
};
export { formatedDate, formatedDateWithDay };
