import $ from "jQuery";

export default function clone(oldObject) {
  return $.extend(true, {}, oldObject);
}
