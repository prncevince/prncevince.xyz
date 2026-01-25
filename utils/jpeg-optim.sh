for file in *; do
  jpegoptim ${file} --max=50
done
