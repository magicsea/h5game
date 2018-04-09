package comm

import (
	"fmt"

	"testing"
)

func f1(args []interface{}) {
	fmt.Println("f1 :", args)
}
func f2(args []interface{}) {
	fmt.Println("f2 :", args)
}
func fx(args []interface{}) {
	fmt.Println("fx :", args)
}

func TestProxy(t *testing.T) {
	pr := NewProxyManager()
	pr.AddListener("test1", f1)
	pr.AddListener("test2", f2)
	pr.AddListener("test1", fx)
	pr.Notify("test1", "a", nil)
	pr.Notify("test2", "c", "d")

	fmt.Println(pr.RemoveListener("test1", f1))
	pr.Notify("test1", "t1")
	fmt.Println(pr.RemoveListener("test1", fx))
	pr.Notify("test1", "t2")
	fmt.Println(pr.RemoveListener("test1", fx))
	pr.Notify("testxxxx", "t2")

}
