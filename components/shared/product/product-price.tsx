import { cn } from "@/lib/utils";


const ProductPrice = ({value, className}: {value:number, className?: string}) => {
    
    const stringValue = value.toFixed(2);
    
    const [integer, decimal] =stringValue.split('.');

    return (
      <p className={cn("text-2xl", className)}>
        <span className="text-xs align-super text-bold">$</span>
        {integer}
        <span className="text-xs align-super">.{decimal}</span>
      </p>
    );
}
 
export default ProductPrice;