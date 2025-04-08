"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/Table";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface FetchData {
  content_id: string;
  category_id: string;
  title: string;
  content: string;
  status: string;
  insert_user_id: string;
  created_at: string;
  updated_at: string;
}

export default function ContentListDraft() {
  const supabase = createClient();
  const [contentsFetchData, setContentsFetchData] = useState<FetchData[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      const { data: contentsFetchData, error: contentsFetchError } =
        await supabase.from("contents").select();
      if (contentsFetchData) {
        setContentsFetchData(contentsFetchData);
      }
      console.log("contentsFetchData", contentsFetchData);

      if (contentsFetchError) {
        console.error("contentsFetchError", contentsFetchError);
      }
    };
    fetchContents();
  }, []);

  return (
    <div>
      <div></div>
      <div>
        <h3>콘텐츠 목록</h3>
        <form>
          <Table className="w-full">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>타이틀</TableHead>
                <TableHead>내용</TableHead>
                <TableHead>상태</TableHead>

                <TableHead>작성자</TableHead>
                <TableHead>작성일</TableHead>
                <TableHead>마지막 업데이트</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentsFetchData.map((content: FetchData) => (
                <TableRow key={content.content_id}>
                  <TableCell>{content.content_id}</TableCell>
                  <TableCell>{content.category_id}</TableCell>
                  <TableCell>{content.title}</TableCell>
                  <TableCell>{content.content}</TableCell>
                  <TableCell>{content.status}</TableCell>
                  <TableCell>{content.insert_user_id}</TableCell>
                  <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {content.created_at}
                  </TableCell>
                  <TableCell>{content.updated_at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </form>
      </div>
    </div>
  );
}
