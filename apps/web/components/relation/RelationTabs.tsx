import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { useState } from "react";
import { ProfileEditable } from "../profile/ProfileEditable";

export const RelationTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("info");

  return (
    <Tabs defaultValue="info" className=" px-4 pb-6" value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="info">基本信息</TabsTrigger>
        <TabsTrigger value="relationship">创建亲属</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <ProfileEditable />
      </TabsContent>
      <TabsContent value="relationship">
        123
      </TabsContent>
    </Tabs>
  );
};
