import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/Table";

export default function ContentListDraft() {
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
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>타이틀</TableHead>
                <TableHead>내용</TableHead>
                <TableHead>작성자</TableHead>
                <TableHead className="">작성일</TableHead>
                <TableHead className="">마지막 업데이트</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    </div>
  );
}
