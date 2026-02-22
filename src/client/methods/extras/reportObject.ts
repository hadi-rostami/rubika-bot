import Client from "../../client";

type ReporttypeObject = "Object" | "Message";

const ReportType = {
  OTHER: 100,
  VIOLENCE: 101,
  SPAM: 102,
  PORNOGRAPHY: 103,
  CHILD_ABUSE: 104,
  COPYRIGHT: 105,
  FISHING: 106,
} as const;

type ReportType = typeof ReportType;

async function reportObject(
  this: Client,
  object_guid: string,
  report_type: ReportType,
  description: string,
  message_id: string,
  report_type_object: ReporttypeObject
) {
  return await this.builder("reportObject", {
    object_guid,
    report_type,
    description,
    message_id,
    report_type_object,
  });
}

export default reportObject;
