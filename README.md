# SelectorResolver
### What is これ？
引数のセレクタ文字列[^1]をquerySelectorに与え、<br>
その結果を引数の関数[^2]に与えてtrueが返される[^3]までsetIntervalします。

特定要素の出現待ちに対してMutationObserverを使うまでもない…な場合にお使いください。<br>
Promise.Allに詰めたり、解決条件の関数でいろいろするとお楽しみいただけると思います。

[^1]: \(例: "[id*='example'] > [class*='some-child']"とか), doResolveByCondの第一引数
[^2]: querySelectorの結果を第一引数にとる関数を渡してネ, doResolveByCondの第二引数
[^3]: 例: elem => elem != null とか
