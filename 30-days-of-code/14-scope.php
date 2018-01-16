public function __construct($a) {
    $this->elements = $a;
}

public function computeDifference() {
    $this->maximumDifference = 0;

    for ($i = 0; $i < count($this->elements); $i++) {
        for ($j = $i; $j < count($this->elements); $j++) {
            $difference = abs($this->elements[$i] - $this->elements[$j]);

            if ($this->maximumDifference < $difference) {
                $this->maximumDifference = $difference;
            }
        }
    }
}
