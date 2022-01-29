import { Wrapper } from "./styled";

export const Result = ({ result }) => {
    return (
        <Wrapper>
            {result !== undefined && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                    {" "}
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </Wrapper>
    )
};