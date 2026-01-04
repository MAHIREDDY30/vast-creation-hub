import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

const sizeData = {
  clothing: {
    title: "Clothing Size Guide",
    headers: ["Size", "Chest (in)", "Waist (in)", "Hip (in)"],
    rows: [
      ["XS", "32-34", "26-28", "34-36"],
      ["S", "34-36", "28-30", "36-38"],
      ["M", "38-40", "32-34", "40-42"],
      ["L", "42-44", "36-38", "44-46"],
      ["XL", "46-48", "40-42", "48-50"],
      ["XXL", "50-52", "44-46", "52-54"],
    ],
  },
  footwear: {
    title: "Footwear Size Guide",
    headers: ["UK", "US", "EU", "Foot Length (cm)"],
    rows: [
      ["6", "7", "40", "25"],
      ["7", "8", "41", "25.5"],
      ["8", "9", "42", "26.5"],
      ["9", "10", "43", "27"],
      ["10", "11", "44", "28"],
      ["11", "12", "45", "28.5"],
      ["12", "13", "46", "29.5"],
    ],
  },
};

interface SizeGuideProps {
  category?: string;
}

const SizeGuide = ({ category }: SizeGuideProps) => {
  const isFootwear = category?.toLowerCase() === "footwear";
  const data = isFootwear ? sizeData.footwear : sizeData.clothing;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary p-0 h-auto font-medium">
          <Ruler className="w-4 h-4 mr-1" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground font-heading">
            {data.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {data.headers.map((header) => (
                    <th
                      key={header}
                      className="py-3 px-2 text-left font-semibold text-foreground"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`py-3 px-2 ${
                          cellIndex === 0
                            ? "font-semibold text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">
              How to Measure
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {isFootwear ? (
                <>
                  <li>• Stand on a piece of paper</li>
                  <li>• Mark the heel and longest toe</li>
                  <li>• Measure the distance in cm</li>
                  <li>• Use the chart to find your size</li>
                </>
              ) : (
                <>
                  <li>• <strong>Chest:</strong> Measure around the fullest part</li>
                  <li>• <strong>Waist:</strong> Measure around your natural waistline</li>
                  <li>• <strong>Hip:</strong> Measure around the fullest part of your hips</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;
