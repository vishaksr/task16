
setTimeout(() => {
    document.getElementById("timeout").innerText = "10";
    setTimeout(() => {
      document.getElementById("timeout").innerText = "9";
      setTimeout(() => {
        document.getElementById("timeout").innerText = "8";
        setTimeout(() => {
          document.getElementById("timeout").innerText = "7";
          setTimeout(() => {
            document.getElementById("timeout").innerText = "6";
            setTimeout(() => {
              document.getElementById("timeout").innerText = "5";
              setTimeout(() => {
                document.getElementById("timeout").innerText = "4";
                setTimeout(() => {
                  document.getElementById("timeout").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("timeout").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("timeout").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("timeout").innerText =
                          "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
