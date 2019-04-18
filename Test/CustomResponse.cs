namespace Test
{
    internal class CustomResponse<T>
    {
        public object Message { get; set; }
        public object StatusCode { get; set; }
        public string Result { get; set; }
    }
}